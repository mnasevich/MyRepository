import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:flutter/foundation.dart';
import 'Dog.dart';
import 'item_card.dart';
import 'breeds.dart';
import 'bottom_bar.dart';


class HomePage extends StatelessWidget {
  @override
  const HomePage({Key key}) : super(key:key);
  Widget build(BuildContext context) {
    final dogData = Provider.of<DogDataProvider>(context);

    return Scaffold(
      backgroundColor: Colors.cyan,
      body: SafeArea(
        child: Container(
            color: Colors.white,
          child:ListView(
            padding: const EdgeInsets.all(10.0),
            children: <Widget>[
              Container(
                child: ListTile(
                  title: Text("Породы собак",
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 24.0, fontWeight: FontWeight.bold),
                  ),
                  subtitle: Text("Несколько пород",
                    textAlign: TextAlign.center,
                    style: TextStyle(fontSize: 15.0),
                  ),
                ),
              ),

              Container(
                padding: const EdgeInsets.all(5.0),
                height: 280,
                child: ListView.builder(
                  scrollDirection: Axis.horizontal,
                    itemCount: dogData.items.length,
                    itemBuilder: (context, int index)=>
                  ChangeNotifierProvider.value(
                  value: dogData.items[index],
                    child: ItemCard(),
              ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(10.0),
                child:Text("Список пород",
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 22.0),
                ),
              ),
              Container(
                padding: const EdgeInsets.all(5.0),
                height: 150,
                width: 200,
                child: ListView.builder(
                  scrollDirection: Axis.vertical,
                  itemCount: dogData.items.length,
                  itemBuilder: (context, int index)=>
                      ChangeNotifierProvider.value(
                        value: dogData.items[index],
                        child:Breeds(),
                      ),
                ),
              ),
            ],
          )
        ),
      ),
       bottomNavigationBar: BottomBar(),
    );
  }
}