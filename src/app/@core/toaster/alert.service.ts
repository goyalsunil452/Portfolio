import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable({
    providedIn: 'root',
})

export class AlertService {
    constructor(private toastr: ToastrService) {

    }
    showToastr(message: string, title: string, typeOfAlter: string) {
        const alertType =typeOfAlter?.toLowerCase();
        if(message && message != 'undefined'){
            switch(alertType){
                case 'success':
                    this.toastr.success(title,message);
                    break;
                case 'error':
                    this.toastr.error(title,message);
                    break;
                case 'warning':
                    this.toastr.warning(title,message);
                    break;
                case 'info':
                    this.toastr.info(title,message);
                    break;
                default:
                    this.toastr.info(title,message);
                    break;
            }
        }
    }

    closeToastr(){
        this.toastr.clear();
    }
}