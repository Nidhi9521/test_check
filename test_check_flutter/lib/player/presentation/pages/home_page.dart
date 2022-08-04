import 'package:flutter/material.dart';
import 'package:test_check_flutter/player/presentation/widgets/card_view.dart';
class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.indigo,
        title: const Text('Data',style: TextStyle(color: Colors.white,fontSize: 22,fontWeight: FontWeight.w600),),
      ),
      body: Center(
        child: ListView.builder(
          itemCount: 15,
          itemBuilder:(context,index) {
            return CardView(index:index);
          },
        ),
      ),
    );
  }
}
