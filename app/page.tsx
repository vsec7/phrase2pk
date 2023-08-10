'use client'
import { useState } from "react"
import { Wallet } from "ethers"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useToast } from "@/components/ui/use-toast"

export default function Home() {

  const [mnemo, setMnemo] = useState("")
  const [pk, setPk] = useState("")
  const [addr, setAddr] = useState("")

  const { toast } = useToast()

  const onConvert = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const wallet = Wallet.fromPhrase(mnemo);
    setPk(wallet.privateKey)
    setAddr(wallet.address)
  };

  return (
    <div className="container flex flex-row items-center justify-center py-5">
      <Card className="w-[700px]">
        <CardHeader className="items-center">
          <CardTitle>Mnemonic to Private Key</CardTitle>
          <CardDescription>Ethereum Converter Tool</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onConvert}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="seed">Seed Phrase / Mnemonic:</Label>
                <Textarea onChange={(e) => setMnemo(e.target.value)} placeholder="Input 12 / 24 words mnemonic" />
                <Button type="submit" variant="outline">Convert</Button>               
              </div>           
            </div>
          </form>
        </CardContent>
        { pk && 
          <CardFooter className="border-t">
            <div className="w-full flex-col">
              <Label htmlFor="addr">Address:</Label>
              <div className="flex justify-between">
                <Input value={addr} readOnly />
                <CopyToClipboard text={addr}>   
                  <Button variant="outline" className="ml-2" onClick={() => { toast({ variant:"destructive", description: "Address Copied" }) }}>
                    <Icons.copy className="h-5 w-5" />
                  </Button>
                </CopyToClipboard>
              </div>
              <Label htmlFor="pk">Private Key:</Label>
              <div className="flex justify-between">
                <Input value={pk} readOnly />
                <CopyToClipboard text={pk}>   
                <Button variant="outline" className="ml-2" onClick={() => { toast({ variant:"destructive", description: "PrivateKey Copied" }) }}>
                    <Icons.copy className="h-5 w-5" />
                  </Button>
                </CopyToClipboard>
              </div>

              <div className="mt-4 w-full">
                <CopyToClipboard text={`Address: ${addr}\nPrivateKey: ${pk}`}>   
                  <Button variant="outline" className="flex flex-row" onClick={() => { toast({ variant:"destructive", description: "All Copied" }) }}>
                    <Icons.copy className="h-5 w-5" /> <span className="ml-3">Copy All</span>
                  </Button>
                </CopyToClipboard>
              </div>
            </div>
          </CardFooter>
        }
      </Card>
    </div>    
  )
}
