import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function About() {
  return (
    <div className="container flex flex-row items-center justify-center py-5">
      <Card className="w-[700px]">
        <CardHeader className="items-center">
          <CardTitle>About</CardTitle>
          <CardDescription>Mnemonic to Private key</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col">
            <span className="border-t"></span>
            <span className="mt-5 font-bold">Use at your own risks.</span>
            <span className="mt-3">I never store your seed phrase / mnemonic at this site!</span>
            <span className="mt-4">Build with: </span>            
            <span>* NextJS-13 ( https://nextjs.org/ )</span>
            <span>* Shadcn UI ( https://ui.shadcn.com/ )</span>
            <span>* ethers.js ( https://github.com/ethers-io/ethers.js )</span>
            <span className="mt-4">Open Source project</span>
            <span className="">Read this code carefully: https://github.com/vsec7/phrase2pk</span>
            <span className="mt-4">Crafted by : Ve </span>
        </CardContent>
      </Card>
    </div>    
  )
}
