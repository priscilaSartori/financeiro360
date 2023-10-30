import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon';
import { ChartModule } from 'angular-highcharts';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/user/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ForgotPasswordComponent } from './pages/user/forgot-password/forgot-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './pages/user/registration/registration.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ProfileComponent } from './dialog/profile/profile.component';
import { ChangePasswordComponent } from './dialog/change-password/change-password.component';
import { ReceitaComponent } from './pages/receita/receita.component';
import { CashPurchasesComponent } from './pages/cash-purchases/cash-purchases.component';
import { SpendingComponent } from './pages/spending/spending.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { InvestmentsComponent } from './pages/investments/investments.component';
import { DadosComprasParceladasComponent } from './forms/dados-compras-parceladas/dados-compras-parceladas.component';
import { FormReceitasComponent } from './forms/form-receitas/form-receitas.component';
import { FormDespesasComponent } from './forms/form-despesas/form-despesas.component';
import { DespesasComponent } from './pages/despesas/despesas.component';
import { FormGastosComponent } from './forms/form-gastos/form-gastos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ForgotPasswordComponent,
    RegistrationComponent,
    HeaderComponent,
    SidenavComponent,
    ProfileComponent,
    ChangePasswordComponent,
    ReceitaComponent,
    CashPurchasesComponent,
    SpendingComponent,
    SummaryComponent,
    PlanningComponent,
    InvestmentsComponent,
    DadosComprasParceladasComponent,
    FormReceitasComponent,
    FormDespesasComponent,
    DespesasComponent,
    FormGastosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule, //Pequena janela pop-up ou uma mensagem temporária exibida na parte inferior ou superior da tela, geralmente por um curto período de tempo. O Snackbar é usado para comunicar informações importantes, feedback ou mensagens curtas para os usuários.
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    ChartModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
