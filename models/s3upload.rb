require 'open-uri'
require 'net/https'
require 'base64'

class S3Upload
  class << self
    def bucket(b = cfg['bucket'])
      s3 = Aws::S3::Resource.new
      s3.bucket(b)
    end

    def cfg
      @s3cfg ||= YAML.load_file(Padrino.root('config/s3.yml'))[RACK_ENV]
    end

    def s3_presigned_post(type,worknew,id)
      bucket Aws::S3::Bucket.new(S3Upload.cfg['bucket'])
      bucket.presigned_post(key: "#{S3Upload.path(type,worknew,id)}${filename}", key_starts_with: S3Upload.path(type,worknew,id), success_action_status: '200', acl: 'public-read', content_type_starts_with: 'image')
    end

    def path(type,worknew,id)
      if type == 'work'
        path = worknew ? 'works/new/' : "works/#{id}/"
      else
        path = worknew ? 'pages/new/' : "pages/#{id}/"
      end
      path
    end

    def delete_older_images(artwork,name)
      bucket = Aws::S3::Bucket.new(S3Upload.cfg['bucket'])
      older_object_name = Artwork.first.image.split('/').last
      object =  bucket.object("works/#{artwork.id}/#{older_object_name}")
      object.delete if object
    end

    def image_upload_from_temp(artwork, name)
      bucket = Aws::S3::Bucket.new(S3Upload.cfg['bucket'])
      temp_object = bucket.object("works/new/#{name}")
      return unless temp_object.exists?
      s3_path = "works/#{artwork.id.to_s}/#{name}"
      temp_object&.copy_to(bucket: S3Upload.cfg['bucket'], key: s3_path, acl: 'public-read')
      temp_object.delete
      artwork.update(image: "https://s3-eu-west-1.amazonaws.com/bysalescloud/" + s3_path)
    end

    def delete_image(artwork)
      bucket = Aws::S3::Bucket.new(S3Upload.cfg['bucket'])
      object =  bucket.object("works/#{artwork.id}/#{artwork.image.split('/').last}")
      object.delete if object
    end

  end
end
