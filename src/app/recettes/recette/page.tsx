import Image from "next/image";

export default function Page() {
  return (
    <div>
      <h2>Tarte aux pommes</h2>
      <Image
        src="/pommes.jpg"
        className=""
        width={50}
        height={50}
        alt="Avatar"
      />
    </div>
  );
}
