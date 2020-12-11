import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'Dog.dart';
import 'description_page.dart';


class Breeds extends StatelessWidget {
   const Breeds({Key key}) : super(key:key);
  @override
  Widget build(BuildContext context) {
    final dog = Provider.of<Dog>(context,listen: false);
    return Container(

          padding: const EdgeInsets.all(10),
          child: ListTile(
            leading: GestureDetector(
              onTap: (){
                Navigator.of(context)
                    .push(MaterialPageRoute(builder: (context) =>
                    DescriptionPage(dogId: dog.id)),
                );
              },
              child: Container(
                width:60,
                height:60,
                decoration:BoxDecoration(
                  borderRadius: BorderRadius.circular(15),
                  image:DecorationImage(
                    image:NetworkImage(dog.imgUrl),
                    fit: BoxFit.cover,
                  ),
                ),
              ),
            ),
            title:Text("${dog.title}"),
          )
      );
  }
}