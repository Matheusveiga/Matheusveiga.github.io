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
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'github.png',
      alt: 'Teste',
      title: 'Teste',
      width: '200px',
      height: '150px',
      description: 'Meu Github',
      links: [{
        name: 'GitHub',
        href: 'https://github.com/Matheusveiga'
      }
      ]
    },
    {
      src: 'github.png',
      alt: 'Teste',
      title: 'Teste',
      width: '100px',
      height: '51px',
      description: 'Meu Github',
      links: [{
        name: 'GitHub',
        href: 'https://github.com/Matheusveiga'
      }
      ]
    },
    {
      src: 'github.png',
      alt: 'Teste',
      title: 'Teste',
      width: '100px',
      height: '51px',
      description: 'Meu Github',
      links: [{
        name: 'GitHub',
        href: 'https://github.com/Matheusveiga'
      }
      ]
    },
    

  ])

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
