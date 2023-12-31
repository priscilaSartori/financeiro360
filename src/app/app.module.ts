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
import { TableReceitasComponent } from './table/tableReceitas/tableReceitas.component';
import { TableComprasComponent } from './table/tableCompras/tableCompras.component';
import { TableDespesasComponent } from './table/tableDespesas/tableDespesas.component';
import { TableGastosComponent } from './table/tableGastos/tableGastos.component';
import { TablePlanningComponent } from './table/tablePlanning/tablePlanning.component';
import { FormPlanningComponent } from './forms/form-planning/form-planning.component';
import { FormInvestmentsComponent } from './forms/form-investments/form-investments.component';
import { TableInvestmentsComponent } from './table/table-investments/table-investments.component';
import { TableMyInvestmentsComponent } from './table/table-my-investments/table-my-investments.component';

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
    FormGastosComponent,
    TableReceitasComponent,
    TableComprasComponent,
    TableDespesasComponent,
    TableGastosComponent,
    TablePlanningComponent,
    FormPlanningComponent,
    FormInvestmentsComponent,
    TableInvestmentsComponent,
    TableMyInvestmentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule, 
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
