import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { VersionSwitcher } from "./version-switcher";
import { SearchForm } from "./search-form";
import Link from "next/link";
import { adminRoute } from "@/routes/adminRoute";
import { userRoute } from "@/routes/userRoute";
import { Route } from "@/types";
import { Roles } from "@/constance/role";
export function AppSidebar({
  user,
  ...props
}: {
  user: { role: string } | undefined
  & React.ComponentProps<typeof Sidebar>;
}) {
  let route: Route[] = [];
  switch (user?.role) {
    case Roles.admin:
      route = adminRoute;
      break;
    case Roles.user:
      route = userRoute;
      break;
    default:
      route = [];
      break;
  }
  return (
    <Sidebar {...props}>
      {/* <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader> */}
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {route.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
