/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs/Rx';
import {DiffListItem, SelectedDiffOption} from './listResolveUtil';
import {MockDataService} from './mockDataService'
@Component({
  selector: 'my-app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'
})
export class AppComponent {

    public originaValuesShown: boolean = false;
    public modalOpen = true;
    public highlightedItemId: number;
    public listItems: Array<DiffListItem> = MockDataService.getData();

    public resultsList: Array<DiffListItem> = this.listItems;
    public confirmationList: Array<DiffListItem> = [];
    public isClearSelectionVisible: boolean = false;
    public showingMoreInfo: boolean = false;
    public moreInfoObject: DiffListItem;

    public onShowMoreInfo(event: Event, id: number): void {
      this.showingMoreInfo = true;
      event.stopPropagation();
      this.moreInfoObject = this._findItemById(id);
    } 

    public onCloseMoreInfo(): void {
      this.showingMoreInfo = false;
    }

private _findItemById(id: number): DiffListItem {
 return this.resultsList.filter(item => item.id === id)[0];
}
  public removeSelection(id: number): void {
        this._findItemById(id).selectedOption = SelectedDiffOption.NotSelected;
        this._updateConfirmationList();
        this._updateClearSelectionVisibility();
  }

  public selectOption(id: number, option: SelectedDiffOption): void {
    let selectedItem: DiffListItem = this.listItems.filter(item => item.id === id)[0];
    selectedItem.selectedOption = option;
    this._updateConfirmationList();
    this._updateClearSelectionVisibility();
  }

  public selectAll(selectionSide: SelectedDiffOption): void {
    switch(selectionSide) {
      case SelectedDiffOption.LeftOption : {
        this.listItems.map(item => item.selectedOption = SelectedDiffOption.LeftOption);
        break;
      }
      case SelectedDiffOption.RightOption : {
        this.listItems.map(item => item.selectedOption = SelectedDiffOption.RightOption);
        break;
      }
      default : {
        this.listItems.map(item => item.selectedOption = SelectedDiffOption.NotSelected);
      }
    }
    this._updateConfirmationList();
    this._updateClearSelectionVisibility();
  }


  public onItemHighlight(id: number): void {
    this.highlightedItemId = id;
    console.log("ID IS: ", id);
  }

  private _updateClearSelectionVisibility(): void {
   this.isClearSelectionVisible = this.listItems.map(item => item.selectedOption).reduce(function areAllItemsUnselected(acc: boolean, nextItem: SelectedDiffOption): boolean {
      return acc || nextItem !== SelectedDiffOption.NotSelected;
    }, false);
  }



    private _updateConfirmationList(): void {
      this.confirmationList = this.resultsList.filter(item => item.selectedOption !== SelectedDiffOption.NotSelected);
    }
}

