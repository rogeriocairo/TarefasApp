import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { HomeDataSource } from './home-datasource';
import { ITarefa } from '../../Models/ITarefa';
import { TarefaService } from '../../services/tarefa.service';
import { IData } from '../../Models/IData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
})

export class HomeComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ITarefa>;
  dataSource = new HomeDataSource();
  tarefaService = inject(TarefaService);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['codigo', 'descricao', 'status', 'data'];

  ngAfterViewInit(): void {
    this.tarefaService.getTarefas().subscribe((tarefa: IData<ITarefa[]> )  =>
      {
      this.dataSource.data = tarefa.result;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    });
  }
}
