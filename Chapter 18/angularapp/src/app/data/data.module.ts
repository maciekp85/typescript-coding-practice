import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { DataSource, DataSourceImpl } from "./datasource";
import { RemoteDataSource } from "./remoteDataSource";

@NgModule({
    imports: [HttpClientModule],
    providers: [DataSource, { provide: DataSourceImpl, useClass: RemoteDataSource }]
})

export class DataModelModule { }