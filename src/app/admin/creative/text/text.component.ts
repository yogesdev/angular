import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../../../services/campaign.service';
import { FormGroup, FormControl } from '@angular/forms';
import { CreativeService } from '../../../services/creative.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  constructor(private campservice:CampaignService, private adservice:CreativeService) { }
  userId={"client_id":1};
  campaignList;
  success_msg;
  error_msg;
  ngOnInit(): void {

    this.campservice.listCampaign(this.userId).subscribe(
      (data)=>{
        this.campaignList =data.campaigns;
      }
    );
  }

  addText ={
    campaignid : '',
    creativename : '',
    textcontent : '',
    destination_url :'',
     

  };

  addtextform= new FormGroup({
    campaignid : new FormControl(null),
    creativename: new FormControl(null),
    textcontent : new FormControl(null),
    destination_url : new FormControl(null),
  });

  addTextad()
  {
    
    this.addText.campaignid = this.addtextform.value.campaignid ;
    this.addText.creativename = this.addtextform.value.creativename ;
    this.addText.textcontent = this.addtextform.value.textcontent ;
    this.addText.destination_url = this.addtextform.value.destination_url ;
    
    this.adservice.addTextCreative(this.addText).subscribe(
      (data)=>{
        console.log(data);
        if(data.creative.affectedRows){
          this.success_msg =true;
          alert('aaa');
          setTimeout(function(){ 
            window.location.href= 'http://localhost:4200/admin/creatives';
              }, 3000);

        }
        else{
          this.error_msg=true;
        }
      }
    );

  }
 
}
