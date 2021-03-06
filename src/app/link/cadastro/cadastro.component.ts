// import { Component, OnDestroy, OnInit, } from "@angular/core";
// import { TiposBolsa, TiposInscricao } from "../../../model/constants";
// import { TableEditColumn } from "../../components/table-edit/table-edit.component";
// import { BolsasService } from "../bolsas.service";
// import { ActivatedRoute, Router } from "@angular/router";
// import { ToastrService } from "ngx-toastr";
// import { apiUrl } from "src/constants/constants";
// import { Subscription } from "rxjs";
//
// @Component({
//   selector: "app-cadastro",
//   templateUrl: "./cadastro.component.html",
//   styleUrls: ["./cadastro.component.scss"],
// })
// export class CadastroComponent implements OnInit, OnDestroy {
//   readonly requisitosCols: TableEditColumn[] = [
//     {
//       model: "descricao",
//       editable: true,
//       label: "Descrição",
//     },
//   ];
//
//   readonly documentosCols: TableEditColumn[] = [
//     {
//       model: "nome",
//       editable: true,
//       label: "Nome",
//     },
//     {
//       model: "arquivoId",
//       editable: true,
//       label: "Arquivo",
//       file: true,
//       onChange: (arquivo: Arquivo, i) => {
//         this.bolsa.documentos[i].dataCriacao = arquivo.criadoEm;
//       },
//     },
//   ];
//
//   isEdit = false;
//   isSaving = false;
//   isLoading = false;
//   tiposBolsa = TiposBolsa;
//   tiposInscricao = TiposInscricao;
//   $bolsaSubscription?: Subscription
//
//   bolsa: Bolsa = {
//     tipoBolsa: undefined,
//     requisitos: [] as Requisito[],
//   } as Bolsa;
//
//   constructor(
//     private service: BolsasService,
//     private router: Router,
//     private route: ActivatedRoute,
//     private notification: ToastrService
//   ) { }
//
//   ngOnDestroy(): void {
//     this.$bolsaSubscription?.unsubscribe()
//   }
//
//   turnSaving() {
//     this.isSaving = !this.isSaving;
//   }
//
//   turnLoading() {
//     this.isLoading = !this.isLoading;
//   }
//
//   ngOnInit(): void {
//     const param = this.route.snapshot.paramMap.get("bolsaId");
//
//     if (!param) {
//       return;
//     }
//
//     this.isEdit = true;
//     this.turnLoading();
//
//     this.$bolsaSubscription = this.service
//       .find(parseInt(param))
//       .subscribe(this.setBolsa.bind(this));
//   }
//
//   setBolsa(bolsa: Bolsa) {
//     this.bolsa = bolsa;
//     this.turnLoading();
//   }
//
//   save(): void {
//     this.turnSaving();
//
//     this.service.save(this.bolsa).subscribe(() => {
//       this.router.navigate(["/bolsas"]);
//       this.turnSaving();
//       this.notification.success('Bolsa salva com sucesso.');
//     });
//   }
//
//   getThumbImage() {
//     return `${apiUrl}/arquivos/${this.bolsa.fotoId}`
//   }
// }
