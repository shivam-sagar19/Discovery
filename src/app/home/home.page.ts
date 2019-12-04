import { Component } from '@angular/core';
import { Config } from 'src/configuration/config';
import { ApiTalkService } from '../services/api-talk.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
public posts
public topPosts = "topPosts"
public latestPosts = "latestPosts"

// images declaration
public icon1 = Config.icon1
public icon2 = Config.icon2
public icon3 = Config.icon3
public icon4 = Config.icon4
public icon5 = Config.icon5
public icon6 = Config.icon6
public icon7 = Config.icon7
public icon8 = Config.icon8
public icon9 = Config.icon9
public icon10 = Config.icon10
public icon11= Config.icon11
public icon12 = Config.icon12
public icon13 = Config.icon13
public icon14 = Config.icon14
public data
public searchTerm: string = "";
form: FormGroup;
public items
  constructor(private apiTalk:ApiTalkService,private formBuilder: FormBuilder) {
    this.posts = this.topPosts
    this.form = this.formBuilder.group({
      tags: [[]],
    });

  }
  
  segmentButtonClicked(value){
    console.log(value)
  }

  search() {
    if(this.form.value.length < 1) {
      this.items = []
      return
    }
    this.form.value.tags = this.tagArrayToString(this.form.value.tags);
    if(this.form.value.tags == '#shoes'){
      this.items = [
        { title: "#redshoes" },
        { title: "#sportshoes" },
      ];
    }
    else if(this.form.value.tags == '#sandals'){
      this.items = [
        { title: "#flatshoes" },
        { title: "#heels" }
      ];
    }
    else if(this.form.value.tags == '#sandals,#shoes'){
      this.items = [
        { title: "#flatshoes" },
        { title: "#heels" },
        { title: "#redshoes" },
        { title: "#sportshoes" },
      ];
    }
    else if(this.form.value.tags == '#shoes,#sandals'){
      this.items = [
        { title: "#flatshoes" },
        { title: "#heels" },
        { title: "#redshoes" },
        { title: "#sportshoes" },
      ];
    }
  }

  tagArrayToString(tagArray: string[]): string {
    if (Array.isArray(tagArray) && tagArray.length > 0) {
      const tags = tagArray.map((e: any) => `${e.value}`);
      const tagString = tags.join();
      return tagString;
    } else {
      return '';
    }
  }


}
