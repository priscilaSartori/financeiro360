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
import { MonthlyBudgetComponent } from './pages/monthly-budget/monthly-budget.component';
import { RoutinePlanningComponent } from './pages/routine-planning/routine-planning.component';
import { HabitComponent } from './pages/habit/habit.component';
import { MealPlannerComponent } from './pages/meal-planner/meal-planner.component';
import { SleepDiaryComponent } from './pages/sleep-diary/sleep-diary.component';
import { RoutineComponent } from './pages/routine/routine.component';
import { PriorityComponent } from './pages/priority/priority.component';
import { ChallengeComponent } from './pages/challenge/challenge.component';
import { BooksComponent } from './pages/books/books.component';
import { FilmsComponent } from './pages/films/films.component';
import { SeriesComponent } from './pages/series/series.component';
import { BirthdaysComponent } from './pages/birthdays/birthdays.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { SkincareComponent } from './pages/skincare/skincare.component';
import { HydrationComponent } from './pages/hydration/hydration.component';
import { ExercisesComponent } from './pages/exercises/exercises.component';
import { HairScheduleComponent } from './pages/hair-schedule/hair-schedule.component';
import { CashPurchasesComponent } from './pages/cash-purchases/cash-purchases.component';
import { SpendingComponent } from './pages/spending/spending.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { HouseBillsComponent } from './pages/house-bills/house-bills.component';
import { MarketComponent } from './pages/market/market.component';

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
    MarketComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
