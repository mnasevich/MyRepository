import 'package:flutter/material.dart';
import 'package:flutter_app/favourite_page.dart';
import 'about_page.dart';

class BottomBar extends StatelessWidget {

  const BottomBar({Key key}) : super(key:key);

  @override
  Widget build(BuildContext context) {
    return BottomAppBar(
        color: Colors.cyan,
      child:Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          Container(
            height: 60.0,
            child:IconButton(
              onPressed: () {
                Navigator.of(context).push(MaterialPageRoute(
                  builder: (context)=>FavouritePage(),
                ));
                /// перейти в избранное
              },
              icon:Icon(Icons.favorite,
                  color: Colors.indigoAccent,
                  size: 50),
            ),
          ),
          Container(
            height: 60.0,
            width:60,
            child:IconButton(
              onPressed: () {
                Navigator.of(context).push(MaterialPageRoute(
                  builder: (context)=>AboutPage(),
                ));
                /// перейти на страницу о приложении
              },
              alignment: Alignment.bottomLeft,
              icon:Icon(Icons.brightness_low_outlined,
                  color: Colors.blueGrey,
                  size: 50),

            ),
          ),
        ],
      ),
    );
  }
}
