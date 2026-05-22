"use client";

import Image from "next/image";
import { team } from "@/config/team";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Container, Section } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslations } from "@/i18n/client";

const avatarGradients = [
  "from-cyan-brand to-purple-brand",
  "from-purple-brand to-magenta-brand",
  "from-magenta-brand to-cyan-brand",
];

export function TeamSection() {
  const t = useTranslations();

  return (
    <Section id="team" variant="dark">
      <Container>
        <AnimatedSection>
          <SectionHeader
            overline={t.team.overline}
            title={t.team.title}
            subtitle={t.team.subtitle}
          />
        </AnimatedSection>

        <StaggerContainer className="grid gap-8 md:grid-cols-3">
          {team.map((member, index) => {
            const copy = t.team.members[member.id];

            return (
              <StaggerItem key={member.id}>
                <GlassCard accentColor="#7029FF" className="overflow-hidden p-0 text-center">
                  {member.photo ? (
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 360px"
                      />
                    </div>
                  ) : (
                    <div
                      className={`flex aspect-[4/5] w-full items-center justify-center bg-gradient-to-br ${avatarGradients[index]} text-5xl font-bold text-white`}
                    >
                      {member.initials}
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="mb-1 text-xl font-bold text-white">{member.name}</h3>
                    <p className="mb-4 text-sm font-semibold text-cyan-brand">{copy.role}</p>
                    <p className="text-sm leading-relaxed text-slate-400">{copy.description}</p>
                  </div>
                </GlassCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
