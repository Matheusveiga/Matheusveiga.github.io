import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: '/html5.svg',
      alt: 'Icone de conhecimento em HTML5',
    },
    {
      src: '/css3.svg',
      alt: 'Icone de conhecimento em CSS3',
    },
    {
      src: '/javascript.svg',
      alt: 'Icone de conhecimento em JavaScript',
    },
    {
      src: '/type.svg',
      alt: 'Icone de conhecimento em TypeScript',
    },
    {
      src: '/angular.svg',
      alt: 'Icone de conhecimento em Angular',
    },
    {
      src: '/csharp.svg',
      alt: 'Icone de conhecimento em C#',
    },
    {
      src: '/nodejs.svg',
      alt: 'Icone de conhecimento em NodeJS',
    }
  ])

}
