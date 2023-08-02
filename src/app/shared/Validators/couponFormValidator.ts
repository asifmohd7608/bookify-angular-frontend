import { AbstractControl } from "@angular/forms";

export function validityStartValidator(control:AbstractControl):{[key:string]:any} | null{
    const validityStart=control.get('Validity_Start')?.value;
    const validityEnd=control.get('Validity_End')?.value;

    let currentTime=new Date();
    currentTime.setHours(0,0,0,0);
    let currentDate=currentTime.getTime();
    if(Date.parse(validityStart)<currentDate){
        return {'startPastDate':true};
    }else if(Date.parse(validityEnd)<Date.parse(validityStart)){
        return {'validityStartGreater':true}
    }else if(Date.parse(validityEnd)===Date.parse(validityStart)){
        return{'sameDate':true}
    }else{return null;}
}

export function validityEndValidator(control:AbstractControl):{[key:string]:any} | null{
    const validityStart=control.get('Validity_Start')?.value;
    const validityEnd=control.get('Validity_End')?.value;

    let currentTime=new Date();
    currentTime.setHours(0,0,0,0);
    let currentDate=currentTime.getTime();
    if(Date.parse(validityEnd)<currentDate){
        return {'endPastDate':true};
    }else if(Date.parse(validityEnd)<Date.parse(validityStart)){
        return {'validityEndLower':true}
    }else if(Date.parse(validityEnd)===Date.parse(validityStart)){
        return{'sameDate':true}
    }else{return null;}
}

export function offerValidator(control:AbstractControl):{[key:string]:any} | null{
 const targetValue=control.get('Coupon_Offer')?.value;
 if(targetValue!=='' && Number.isNaN(parseInt(targetValue))){
    console.log('nan')
    return {'offerNan':true}
 }else{
    return null;
 }
}
