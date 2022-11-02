import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { PokemonService } from '../../../src/app/basic/services/pokemon.service'


describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve traer la informacion de bulbasour', (done)=> {  //CON DONE TENEMPOS UN METODO QUE SE PONE EN LOS OBSERVABLES O RPOMESAS PARA QUE SE ESPERE Y ASI MUESTRE EL RESULTADO CORRECTO DE LO QUE RECIBIMOS
    service.getPokemon(1)
      .subscribe(pokemon => {
        expect(pokemon.name).toBe('bulbasaur')
        done();
      })
        
  })

  it('Deve traer la info de pikachu', (done)=> {
    service.getPokemonPromise(25).then(pokemon => {
      expect(pokemon?.name).toBe('pikachu')
      done()
    })
  })

});
