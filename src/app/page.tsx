import Image from "next/image";

export default function Home() {
  const urlProfile =
    "https://res.cloudinary.com/reymi/image/upload/v1691400619/Portfolio/reymitech_nkjknt.jpg";
  return (
    <main className="flex items-center text-dark w-full min-h-screen">
      <div className={`w-full h-full inline-block z-0 bg-light p-32`}>
        <div className="flex items-center justify-between w-full">
          {/**
           * 
<Image
            src={urlProfile}
            alt="Reymi"
            width="10"
            height="10"
            className="w-full h-auto"
          />
           */}
        </div>
      </div>
    </main>
  );
}
