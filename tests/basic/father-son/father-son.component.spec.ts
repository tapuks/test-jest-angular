import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherSonComponent } from '../../../src/app/basic/father-son/father-son.component';

describe('FatherSonComponent', () => {
  let component: FatherSonComponent;
  let fixture: ComponentFixture<FatherSonComponent>;
  let compiled : HTMLElement //1

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatherSonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement //2
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('debe ser igual con la fotografia del html', () => {
  //   expect(compiled).toMatchSnapshot();
  // });

  it('No deben aparecer botones si no hay cliente', ()=> {
    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(0)
  })
  it('Deben aparecer 2 botones si hay cliente', ()=> {
    component.client= {name: 'david', id:1}
    fixture.detectChanges()
    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(2)
  })
    it('El boton 2 tiene de texto: Borrar cliente', ()=> {
    component.client= {name: 'david', id:1}
    fixture.detectChanges()
    const buttons = compiled.querySelectorAll('button');
    expect(buttons[1].textContent).toBe('Borrar cliente')
  })
  it('Debe emitir onDeleteClient con el boton eliminar', ()=> {
    component.client= {name: 'david', id:1} // creamos cliente para que aparezcan los botones
    fixture.detectChanges() // ponemos esto para que detecte los cambios
    jest.spyOn( component.onDeleteClient, 'emit') //espiamos el metodo emit de onDeleteClient
    const btnDelete = compiled.querySelector('[data-test=btn-delete]'); // en el html le hemos puesto un atributo al boton de eliminar
    btnDelete?.dispatchEvent( new Event('click')) // lanzamos un click al boton 
    expect(component.onDeleteClient.emit).toHaveBeenCalled()// se espera que ondeleteclient haya sido llamado
  })
  it('Debe emitir onClientUpdate con el boton update', ()=> {
    component.client= { id:2, name: 'david'} // creamos cliente para que aparezcan los botones
    fixture.detectChanges() // ponemos esto para que detecte los cambios
    jest.spyOn( component.onClientUpdate, 'emit') //espiamos el metodo emit de onDeleteClient
    const btnUpdate = compiled.querySelector('#btn-update'); // en el html le hemos puesto un id
    btnUpdate?.dispatchEvent( new Event('click')) // lanzamos un click al boton 
    expect(component.onClientUpdate.emit).toHaveBeenCalledWith({ id:2, name:'david'})// se espera que onUpdate envie ese objeto
  })
});
