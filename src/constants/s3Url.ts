const S3_URL = (key: string) => `${process.env.NEXT_PUBLIC_S3_URL}/${key}`;

export default S3_URL;
