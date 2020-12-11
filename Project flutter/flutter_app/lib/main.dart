import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'home_page.dart';
import 'Dog.dart';
import 'Favourites.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  const MyApp({Key key}) : super(key:key);
  Widget build(BuildContext context) {
    return MultiProvider(
      providers:[
        ChangeNotifierProvider<FavouritesDataProvider>(
          create:(context)=>FavouritesDataProvider(),
        ),
        ChangeNotifierProvider<DogDataProvider>(
          create:(context)=>DogDataProvider(),
        )
      ],
      child: MaterialApp(
        home: HomePage(),
      ),
    );
  }
}