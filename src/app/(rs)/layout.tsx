

export default function RsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div className="mx-auto w-full ">
   

 <div className="px-4 py-2"> 
{children}

    </div>
   </div>
  );
}
