import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import {MatDialogModule} from '@angular/material/dialog'
import {MatDialog} from '@angular/material/dialog'
import {inject} from '@angular/core'
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'https://via.placeholder.com/200x150/2fbf71/FFFFFF?text=CaloriesBot',
      alt: 'Project image for CaloriesBot',
      title: 'CaloriesBot',
      width: '200px',
      height: '150px',
      description: 'Bot nutricional para Telegram com FastAPI, Google Gemini, Groq/LLaMA, Whisper e Supabase.',
      links: [
        {
          name: 'GitHub',
          href: 'https://github.com/Matheusveiga'
        }
      ]
    },
    {
      src: 'https://via.placeholder.com/200x150/a5f3fc/000000?text=LH_PET',
      alt: 'Project image for LH_PET',
      title: 'LH_PET',
      width: '200px',
      height: '150px',
      description: 'Sistema de gestão veterinária ASP.NET MVC com MySQL, JWT, BCrypt e Serilog.',
      links: [
        {
          name: 'GitHub',
          href: 'https://github.com/Matheusveiga/LH_PET'
        }
      ]
    },
    {
      src: 'https://via.placeholder.com/200x150/fbbf24/000000?text=XDrones',
      alt: 'Project image for XDrones',
      title: 'XDrones',
      width: '200px',
      height: '150px',
      description: 'E-commerce de drones com ASP.NET Core, MySQL, JWT e BCrypt para o TCC do SENAI.',
      links: [
        {
          name: 'GitHub',
          href: 'https://github.com/ThiagoPinheiro-pnp/XDrones'
        }
      ]
    }
  ])

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
