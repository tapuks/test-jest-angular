import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonService } from '../../../src/app/basic/services/pokemon.service';
import { CharizardComponent } from '../../../src/app/basic/charizard/charizard.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('CharizardComponent', () => {
  let component: CharizardComponent;
  let fixture: ComponentFixture<CharizardComponent>;
  let compiled:HTMLElement;
  let service: PokemonService;
  let httpMock: HttpTestingController

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharizardComponent ],
      imports: [HttpClientTestingModule], //IMPORTAR ESTO PARA QUE PASE EL TEST
      providers: [PokemonService]//TAMBIEN LOS PROVIDERS
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharizardComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController)

    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deveria mostrar el texto cargando', ()=> {
    
    const p = compiled.querySelector('p');
    expect(p?.textContent).toContain('Loading...')
    
  })

   it('Deveria cargar a charizard inmediatamente', ()=> {
    
    const domPokemon = {
      name : 'charizard',
      sprites: {
                  front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'
               }
    }
    const request = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/6') // con este mock le decimos quen espera una peticion a esta pagina

    expect( request.request.method).toBe('GET') //la peticion que espera es get
    request.flush(domPokemon) // ese reuqest retorno el objeto domPokemon
    fixture.detectChanges()
    const h3 = compiled.querySelector('h3');
    expect(h3?.textContent?.toLocaleLowerCase()).toContain(domPokemon.name.toLocaleLowerCase())
    
  })
});
