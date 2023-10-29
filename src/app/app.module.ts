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
import { MonthlyBudgetComponent } from './pages/financas/monthly-budget/monthly-budget.component';
import { RoutinePlanningComponent } from './pages/tarefas/routine-planning/routine-planning.component';
import { HabitComponent } from './pages/tarefas/habit/habit.component';
import { MealPlannerComponent } from './pages/tarefas/meal-planner/meal-planner.component';
import { SleepDiaryComponent } from './pages/tarefas/sleep-diary/sleep-diary.component';
import { RoutineComponent } from './pages/tarefas/routine/routine.component';
import { PriorityComponent } from './pages/tarefas/priority/priority.component';
import { ChallengeComponent } from './pages/tarefas/challenge/challenge.component';
import { BooksComponent } from './pages/lazer/books/books.component';
import { FilmsComponent } from './pages/lazer/films/films.component';
import { SeriesComponent } from './pages/lazer/series/series.component';
import { BirthdaysComponent } from './pages/lazer/birthdays/birthdays.component';
import { DoctorComponent } from './pages/saude/doctor/doctor.component';
import { SkincareComponent } from './pages/saude/skincare/skincare.component';
import { HydrationComponent } from './pages/saude/hydration/hydration.component';
import { ExercisesComponent } from './pages/saude/exercises/exercises.component';
import { HairScheduleComponent } from './pages/saude/hair-schedule/hair-schedule.component';
import { CashPurchasesComponent } from './pages/financas/cash-purchases/cash-purchases.component';
import { SpendingComponent } from './pages/financas/spending/spending.component';
import { SummaryComponent } from './pages/financas/summary/summary.component';
import { PlanningComponent } from './pages/financas/planning/planning.component';
import { HouseBillsComponent } from './pages/casa/house-bills/house-bills.component';
import { MarketComponent } from './pages/casa/market/market.component';
import { InvestmentsComponent } from './pages/financas/investments/investments.component';

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
    MonthlyBudgetComponent,
    RoutinePlanningComponent,
    HabitComponent,
    MealPlannerComponent,
    SleepDiaryComponent,
    RoutineComponent,
    PriorityComponent,
    ChallengeComponent,
    BooksComponent,
    FilmsComponent,
    SeriesComponent,
    BirthdaysComponent,
    DoctorComponent,
    SkincareComponent,
    HydrationComponent,
    ExercisesComponent,
    HairScheduleComponent,
    CashPurchasesComponent,
    SpendingComponent,
    SummaryComponent,
    PlanningComponent,
    HouseBillsComponent,
    MarketComponent,
    InvestmentsComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
