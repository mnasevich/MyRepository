import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';
import 'Dog.dart';


class DescriptionPage extends StatelessWidget {
  final String dogId;

  DescriptionPage({Key key, this.dogId}) : super(key: key);

  @override
  Widget build(BuildContext context) {

    final dogData = context.watch<DogDataProvider>()
        .getElementById(dogId);

    return Scaffold(
      appBar: AppBar(
        title: Text(dogData.title, style: GoogleFonts.marmelad(),),
      ),
      body: Container(
        child: ListView(
          children: <Widget>[
            Hero(
              tag: dogData.imgUrl,
              child: Container(
                height: 300,
                width: double.infinity,
                decoration: BoxDecoration(
                  image: DecorationImage(
                    image: NetworkImage(dogData.imgUrl),
                    fit: BoxFit.cover,
                  ),
                ),
              ),
            ),

            Card(
              elevation: 5.0,
              margin: const EdgeInsets.symmetric(horizontal: 35.0, vertical: 10.0),
              child: Container(
                padding: const EdgeInsets.all(30.0),
                child: Column(
                  children: <Widget>[
                    Text(dogData.title, style: TextStyle(fontSize: 26.0),),
                    Text(dogData.description),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}