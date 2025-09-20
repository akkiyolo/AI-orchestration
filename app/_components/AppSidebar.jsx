"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Ghost, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function AppSidebar() {
  const {theme,setTheme} = useTheme();
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Image 
              src="/logo.svg" 
              alt="logo" 
              width={40} 
              height={40}
              className="w-[40px] h-[40px]"
              />
              <h1 className="font-bold text-xl">Orch.AI</h1>
            </div>
            <div>
              {theme=='light'? <Button variant={'ghost'} onClick={()=>setTheme('dark')}><Sun /></Button>
                  :<Button variant={'ghost'} onClick={()=>setTheme('light')}><Moon /></Button>}
            </div>
          </div>
          <Button className="mt-7 w-full" size="lg">+ New Chat</Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <div className={'p-3'}>
            <h2 className="font-bold text-lg">Chat</h2>
            <p className="text-sm text-gray-500">Sign In to start chatting with multiple LLMs</p>
          </div>
        </SidebarGroup>
        
      </SidebarContent>
      <SidebarFooter>
        <div className="pd-3 mb-12">
          <Button className={'w-full'} size={'lg'}>Sign In/Sign Up</Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}