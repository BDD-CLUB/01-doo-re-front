import S3_URL from '@/constants/s3Url';

const getAvatarSrc = (imageUrl?: string) => {
  if (!imageUrl || imageUrl === 'TEMP_URL') {
    return undefined;
  }
  return imageUrl.startsWith('https') ? imageUrl : S3_URL(imageUrl);
};

export default getAvatarSrc;
