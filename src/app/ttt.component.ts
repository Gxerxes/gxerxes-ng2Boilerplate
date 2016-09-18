import {
    Component,
    ChangeDetectionStrategy,
    ViewChild
} from "@angular/core";
import {ModalDirective} from "ng2-bootstrap";

@Component({
    selector: 'ttt',
    template: `
            <h1>ttt</h1>
            <button type="button" class="btn btn-primary" (click)="smModal.show()">Small modal</button>
            <button type="button" class="btn btn-primary" (click)="showChildModal()">Small modal + auto hide</button>
            <div bsModal #smModal="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-sm">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" aria-label="Close" (click)="smModal.hide()">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title">Small modal from ttt component</h4>
                  </div>
                  <div class="modal-body">
                     I am ttt
                  </div>
                </div>
              </div>
            </div>
            `
})

export class ttt {

    @ViewChild('smModal') public childModal:ModalDirective;

    public showChildModal():void {
        this.childModal.show();
        setTimeout(()=>{
              this.hideChildModal();
        },3000)
    }

    public hideChildModal():void {
        this.childModal.hide();
    }

}