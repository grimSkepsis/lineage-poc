/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Subject, Observable } from "rxjs/Rx";

@Component({
  selector: "my-app",
  styleUrls: ["app.component.css"],
  templateUrl: "app.component.html"
})
export class AppComponent {
  public lineageItems = [
    {
      title: "item1",
      isSelected: true,
      children: [
        {
          title: "child 1",
          isSelected: true,
        },
        {
          title: "child 2",
          isSelected: false,
        }
      ]
    },
    {
      title: "item2",
      isSelected: false,
      children: [
        {
          title: "child 1",
          isSelected: false,
        },
        {
          title: "child 2",
          isSelected: false,
        }
      ]
    },
    {
      title: "item3",
      isSelected: false,
      children: [
        {
          title: "child 1",
          isSelected: false,
        },
        {
          title: "child 2",
          isSelected: false
        }
      ]
    }
  ];

  selectChild(selectedItem: LineageParentItem, childName: string): void {
    this.lineageItems.map( item => {
      item.isSelected = false;
      item.children.map(child => {
        child.isSelected = false;
      });
      return item;
    })
    selectedItem.isSelected = true;
    selectedItem.children.find(child => child.title === childName).isSelected = true;
  }
}

interface LineageParentItem {
  title: string;
  children: LineageChildItem[];
  isSelected: boolean;
}

interface LineageChildItem {
  title: string;
  isSelected: boolean;
}
