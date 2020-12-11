import 'package:flutter/material.dart';

class AboutPage extends StatelessWidget {

 AboutPage ({Key key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("О приложении"),
      ),
      body:Container(
        height: 120,
        width: double.infinity,
        child: Text("Приложение содержит информацию о интересных породах собак.",
          style: TextStyle(fontSize: 24.0),),
      ) ,
    );
  }
}