import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileComponent } from "./profile.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { IntroComponent } from "./intro/intro.component";
import { AboutComponent } from "./about/about.component";
import { SkillsComponent } from "./skills/skills.component";
import { ExperienceComponent } from "./experience/experience.component";
import { EducationComponent } from "./education/education.component";
import { ReferenceComponent } from "./reference/reference.component";
import { ContactComponent } from "./contact/contact.component";
import { NgxSpinnerModule } from "../../../node_modules/ngx-spinner";
import { ProjectsComponent } from "./projects/projects.component";

@NgModule({
  imports: [CommonModule, NgxSpinnerModule],
  declarations: [
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ReferenceComponent,
    ContactComponent,
    ProjectsComponent,
  ],
  providers: [],
})
export class ProfileModule {}
