"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function CoolPortraitCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <CardContainer className={className}>
      <CardBody>
        <CardItem translateZ="50">{children}</CardItem>
      </CardBody>
    </CardContainer>
  );
}
