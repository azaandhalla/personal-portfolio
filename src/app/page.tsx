import Header from "@/components/header";
import ItemBadges from "@/components/section/item/badges";
import ItemBullet from "@/components/section/item/bullet";
import SkillCategory from "@/components/section/item/category";
import SkillItem from "@/components/section/item/skill";
import ItemTitle from "@/components/section/item/title";
import Section from "@/components/section/section";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <Section title="Featured Project">
          <div className="flex flex-col gap-2">
            <ItemTitle primary="Taxpal" date="June 2023 - September 2024" />
            <ItemBadges
              values={[
                "TypeScript",
                "Next.js",
                "AWS",
                "AWS CDK",
                "Tailwind",
                "tRPC",
                "Prisma",
                "PostgreSQL",
              ]}
            />
            <Link
              className="text-sm w-fit"
              href="https://www.azaandhalla.com/taxpal"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://www.azaandhalla.com/taxpal
            </Link>
            <ItemBullet value="First full-stack application, designed to gain hands-on experience in building a fully functional web app with authentication, backend services, cloud deployment, and security best practices." />
          </div>
          <div className="flex flex-col gap-2">
            <ItemTitle
              primary="DhallaBills"
              title="(WIP)"
              date="December 2024 - Present"
            />
            <ItemBadges values={["TypeScript", "Next.js", "shadcn/ui"]} />
            <Link
              className="text-sm w-fit"
              href="https://github.com/azaandhalla/dhallabills"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://github.com/azaandhalla/dhallabills
            </Link>
            <ItemBullet value="An open source and self-hosted personal finance app aiming to be a one stop shop for tracking banking, investing, and budgeting." />
          </div>
        </Section>
        <Section title="Experience">
          <div className="flex flex-col gap-2">
            <ItemTitle
              primary="Apple"
              title="DevOps Engineer"
              date="September 2020 - June 2022"
            />
            <ItemBadges values={["AWS", "IaC", "CloudFormation"]} />
            <div className="flex flex-col gap-1">
              <ItemBullet value="Managed AWS and in-house infrastructure for the company's global online store, with configuration, infrastructure, and secrets orchestrated across tens of thousands of servers using IaC" />
              <ItemBullet value="Supervised a team of contractors for weekly dev, stage, and prod deployments across all AWS organizations; troubleshot errors and documented deployment tracking for customers" />
              <ItemBullet value="Led the initial research, testing, and migration to AWS Graviton, resulting in annual server cost savings of tens of millions" />
              <ItemBullet value="Collaborated with cross-functional teams to integrate applications into infrastructure with CloudFormation, meeting performance and security standards" />
              <ItemBullet value="Built a monitoring tool to track and clean stale AWS resources, notifying employees of upcoming resource teardown" />
              <ItemBullet value="Contributed to the company's custom cloud deployment kit written in Go" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <ItemTitle
              primary="Apple"
              title="Java/DevOps Engineer"
              date="January 2020 - September 2020"
              subTitle="(Contract)"
            />

            <ItemBadges values={["Java", "HazelCast", "Ansible"]} />
            <div className="flex flex-col gap-1">
              <ItemBullet value="Contributed to development of custom in-house deployment tool for server applications using Java and Spring Boot" />
              <ItemBullet value="Migrated legacy Oracle Coherence system to HazelCast, considering custom configurations within a standardized Spring Boot application wrapper" />
              <ItemBullet value="Implemented data serialization for efficient data read/write operations in cache systems" />
              <ItemBullet value="Modified and improved Ansible playbooks to automate provisioning of the application on their host servers and it's sentinel hosts" />
              <ItemBullet value="Gained expertise in datacenter operations, troubleshooting and triaging deployment issues across of servers" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <ItemTitle
              primary="The Home Depot"
              title="Software Engineer"
              date="January 2018 - January 2020"
            />
            <ItemBadges
              values={[
                "Java",
                "GCP",
                "Cassandra",
                "Concourse",
                "BigQuery",
                "DataFlow",
              ]}
            />
            <div className="flex flex-col gap-1">
              <ItemBullet value="Managed a multi-datacenter Cassandra cluster on Google Cloud, overseeing billions records across eight tables" />
              <ItemBullet value="Built a semi-autonomous CI pipeline with Concourse, reducing deployment times by 50% through dependency caching and enforcing unit test coverage and security thresholds to enhance code quality" />
              <ItemBullet value="Used Google Dataflow and BigQuery to developed a data-validation application for legacy project migration to identify API discrepancies, reducing data errors by 99.96%" />
              <ItemBullet value="Transitioned some batch processes to real-time updates using Google Pub/Sub, enabling immediate updates to customer-facing data" />
              <ItemBullet value="Created a configurable Quartz scheduler with a RESTful API using Spring Boot to orchestrate Dataflow jobs, increasing deployment flexibility and speed" />
              <ItemBullet value="Built big data batch text-processing pipelines in Google Dataflow to efficiently inject records into Cassandra" />
            </div>
          </div>
        </Section>
        <Section title="Certificates">
          <ItemTitle primary="AWS Certified Cloud Practitioner" date="2023" />
          <Link href="https://www.credly.com/badges/1f8994f2-2060-41b5-a1fb-5a6a691ec119">
            https://www.credly.com/badges/1f8994f2-2060-41b5-a1fb-5a6a691ec119
          </Link>
        </Section>
        <Section title="Skills & Tools">
          <SkillItem title="Language">
            <SkillCategory category="FE Related" skills={["TypeScript"]} />
            <SkillCategory
              category="BE Related"
              skills={["Go", "Python", "SQL"]}
            />
            <SkillCategory category="Other" skills={["Java"]} />
          </SkillItem>
          <SkillItem title="Technologies">
            <SkillCategory
              category="UI Related"
              skills={["Tailwind", "Shadcn"]}
            />
            <SkillCategory
              category="FE Related"
              skills={["React", "Next.js", "Playwright"]}
            />
            <SkillCategory
              category="BE Related"
              skills={[
                "IaC",
                "Concourse",
                "PostgreSQL",
                "Ansible",
                "tRPC",
                "Prisma",
                "Cassandra",
                "Redis",
              ]}
            />
            <SkillCategory
              category="Cloud"
              skills={[
                "AWS",
                "ECS",
                "CloudFormation",
                "CodePipeline",
                "GCP",
                "DataFlow",
                "Google Pub/Sub",
                "BigQuery",
              ]}
            />
            <SkillCategory category="Software" skills={["VS Code", "Figma"]} />
          </SkillItem>
        </Section>
      </main>
    </div>
  );
}
