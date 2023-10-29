import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { FullnamePipe } from './pipes/fullname.pipe';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { FormErrorsPipe } from './pipes/form-errors.pipe';
import { Headers20Directive } from './directives/headers20.directive';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatDatepickerModule } from '@angular/material/datepicker';



@NgModule({
  declarations: [
    FullnamePipe,
    FormErrorsPipe,
    Headers20Directive
    
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatMenuModule,
    MatTableModule,
    FullnamePipe,
    MatInputModule,
    MatSelectModule,
    FormErrorsPipe,
    Headers20Directive,
    MatSelectModule,
    TranslateModule,
    MatDatepickerModule
    
    
  ]
})
export class SharedModule { }
