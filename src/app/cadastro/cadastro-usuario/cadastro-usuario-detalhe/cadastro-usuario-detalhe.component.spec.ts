import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroUsuarioDetalheComponent } from './cadastro-usuario-detalhe.component';

describe('CadastroUsuarioDetalheComponent', () => {
  let component: CadastroUsuarioDetalheComponent;
  let fixture: ComponentFixture<CadastroUsuarioDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroUsuarioDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroUsuarioDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
