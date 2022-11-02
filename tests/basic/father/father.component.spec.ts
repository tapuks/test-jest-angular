import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FatherSonComponent } from '../../../src/app/basic/father-son/father-son.component'
import { FatherComponent } from '../../../src/app/basic/father/father.component';

describe('FatherComponent', () => {
  let component: FatherComponent;
  let fixture: ComponentFixture<FatherComponent>;
  let compiled: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatherComponent, FatherSonComponent ] //Importamos FathersonComponent
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('El cliente debe retornar el objeto', ()=> {
    fixture.detectChanges()
    const btn = compiled.querySelector('#btn-new')
    btn?.dispatchEvent(new Event('click'))
    expect(component.client).toEqual({id:1, name:'jazmin'})

  });
  it('Debe de borrar el cliente si se emite onDeleteClient(hijo)', ()=> {
    component.client= {id:1, name:'david'}
    fixture.detectChanges()
    const hijoDebugElement = fixture.debugElement.query( By.directive(FatherSonComponent)) // tenemos un control del componente hijo
    const hijoComponent= hijoDebugElement.componentInstance; //Le decimos que es de tipo Fathercomponent y que es una instancia
    hijoComponent.onDeleteClient.emit();
    expect(component.client).toBe(undefined) //espera undefined porque al lanzar el emit se borra el cliente

  })
  it('Debe de actualizar el cliente onCllientUpdate', ()=> {
    component.client= {id:1, name:'david'}
    fixture.detectChanges();
    const hijoDebugElement = fixture.debugElement.query(By.directive(FatherSonComponent));
    const hijoComponent= hijoDebugElement.componentInstance;
    hijoComponent.onClientUpdate.emit({id:3, name: 'jazmin'})
    expect(component.client).toEqual({id:3, name: 'jazmin'})//Cuando evaluamos si un objeto es igual a otro objeto se usa toEqual

  })
});
