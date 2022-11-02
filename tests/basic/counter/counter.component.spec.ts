import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from '../../../src/app/basic/counter/counter.component';


describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled= fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe incrementar o decrementar dependiendo el argumento', ()=> {
    component.onClick(-5);
    expect(component.counter).toBe(5)
  })

  it('Hacer click en los botones debe incrementar o decrementar en 1', ()=> {
    const buttons = compiled.querySelectorAll('button')
    
    buttons[0].click()
    expect(component.counter).toBe(11)
    buttons[1].click()
    buttons[1].click()
    expect(component.counter).toBe(9)
  })

  it('Pulsar el boton debe cambiar la etiqueta p',()=> {
    component.onClick(+5)
    fixture.detectChanges()
    const p = compiled.querySelector('p')
    expect(p?.textContent).toContain('15')
  })
});
