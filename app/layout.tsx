import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "沐爪宠物洗护店",
  description: "沐爪宠物洗护店提供猫狗洗护、美容修剪、SPA护理和健康基础检查。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
