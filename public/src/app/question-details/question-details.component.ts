import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Http } from '@angular/http';
import { QuestionService } from './../question.service';
import { LoginRegService } from './../login-reg.service';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {
	
  currentUser = {"name": ""}
  question = {};
	
  newAnswer: object = {
    user: this.currentUser["name"],
    title: "",
    description: "",
    likes: 0,
  }
 

  constructor(private _logRegService: LoginRegService, private _router: Router, private _questionService: QuestionService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.loadQuestion();
    this.getUser();

  }

  addLike(answer_id){
    console.log("adding likes to answer: ", answer_id);
    this._questionService.addLike({"_id": answer_id})
    .then((data)=>{
      if (data.errors){
        console.log(data.errors);
      }else{
        console.log("successfully added a like", data)
         //this.question = data;
         //console.log(this.question);
         console.log('test');
         this.loadQuestion();
         this._router.navigate(['/question/'+this.question["_id"]]);


      }
    })

  }

  loadQuestion(){
        this._route.paramMap.subscribe( params => {
      console.log("got the param", params.get('id'));
      let id = params.get('id');
      this._questionService.getQuestion({"_id": id})
      .then((data)=>{
        if (data.errors){
          console.log(data.errors);
        }else{
          console.log("successfully got the question ", data)
           this.question = data;
           console.log(this.question);
        }
      })
     })
  }

    addAnswer(){
    
    this.newAnswer["user"] = this.currentUser["name"]
    console.log("in new-answer.components.ts addQuestion: ", this.newAnswer)
    console.log("This is the question id:", this.question["_id"]);
    this._questionService.addAnswer(this.newAnswer, this.question["_id"])
    .then((data)=>{
      if (data.errors){
        console.log(data.errors);
      }else{
        console.log("added the answer ", data)
        this.loadQuestion();
        this._router.navigate(['question/'+this.question["_id"]]);
      }
    })
  }

  getUser(){
      //checking if user is logged in
        this._logRegService.getCurrentUser()
    .then((data)=>{
      if (data.errors){
        console.log("failed to find current user");
        this._router.navigate(['login']);
      }else{
        console.log("found current user");
          this.currentUser = data;
      }
    
    })
  }

}
