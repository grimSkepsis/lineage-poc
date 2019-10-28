import {SelectedDiffOption, DiffListItem, DiffOptionObject, DiffFieldValuePair} from './listResolveUtil';
export class MockDataService {

  public static getData(): any {
    return [
    new DiffListItem(0,
      "Age : Sensitive",
      "Age : Aggregate",
      "Age : Sensitive",
      "Age", SelectedDiffOption.NotSelected,
      [
        new DiffFieldValuePair(
          "propertyId",
          "age",
          "age",
          "age",
          false,
          false
        ),
        new DiffFieldValuePair(
          "accessLevel",
          "Sensitive",
          "Aggregate",
          "Sensitive",
          true,
          false
          ),
        new DiffFieldValuePair(
          "analyticObjectReferenceName",
          "Employee",
          "Employee",
          "Employee",
          false,
          false
        ),
        new DiffFieldValuePair(
          "analyticObjectReferencePath",
          "[]",
          "[]",
          "[]",
          false,
          false
        )
      ]),
    new DiffListItem(1, 
      "Date of Birth : No Access",
      "Date of Birth : Aggregate",
      "Date of Birth : No Access",
      "Date of Birth", SelectedDiffOption.NotSelected,
            [
        new DiffFieldValuePair(
          "propertyId",
          "Date_Of_Birth",
          "Date_Of_Birth",
          "Date_Of_Birth",
          false,
          false
        ),
        new DiffFieldValuePair(
          "accessLevel",
          "No Access",
          "Aggregate",
          "No Access",
          true,
          false
          ),
        new DiffFieldValuePair(
          "analyticObjectReferenceName",
          "Employee",
          "Employee",
          "Employee",
          false,
          false
        ),
        new DiffFieldValuePair(
          "analyticObjectReferencePath",
          "[]",
          "[]",
          "[]",
          false,
          false
        )
      ]),
    new DiffListItem(2,      
      "First Name : Sensitive",
      "First Name : Sensitive",
      "First Name : Aggregate",
        "First Name", SelectedDiffOption.NotSelected,
            [
        new DiffFieldValuePair(
          "propertyId",
          "First_Name",
          "First_Name",
          "First_Name",
          false,
          false
        ),
        new DiffFieldValuePair(
          "accessLevel",
          "Sensitive",
          "Sensitive",
          "Aggregate",
          false,
          true
          ),
        new DiffFieldValuePair(
          "analyticObjectReferenceName",
          "Employee",
          "Employee",
          "Employee",
          false,
          false
        ),
        new DiffFieldValuePair(
          "analyticObjectReferencePath",
          "[]",
          "[]",
          "[]",
          false,
          false
        )
      ]),
    new DiffListItem(3,
      "Eye Color : No Access",
      "Eye Color : Aggregate",
      "Eye Color : Sensitive",
        "Eye Color", SelectedDiffOption.NotSelected,
            [
        new DiffFieldValuePair(
          "propertyId",
          "Eye_Color",
          "Eye_Color",
          "Eye_Color",
          false,
          false
        ),
        new DiffFieldValuePair(
          "accessLevel",
          "No Access",
          "Aggregate",
          "Sensitive",
          true,
          true
          ),
        new DiffFieldValuePair(
          "analyticObjectReferenceName",
          "Employee",
          "Employee",
          "Employee",
          false,
          false
        ),
        new DiffFieldValuePair(
          "analyticObjectReferencePath",
          "[]",
          "[]",
          "[]",
          false,
          false
        )
      ]),

    new DiffListItem(10,
      "Vacation Days : No Access",
      "Vacation Days : Aggregate",
      "Vacation Days : No Access",
      "Vacation Days", SelectedDiffOption.NotSelected,
            [
        new DiffFieldValuePair(
          "propertyId",
          "Vacation_Days",
          "Vacation_Days",
          "Vacation_Days",
          false,
          false
        ),
        new DiffFieldValuePair(
          "accessLevel",
          "No Access",
          "Aggregate",
          "No Access",
          true,
          false
          ),
        new DiffFieldValuePair(
          "analyticObjectReferenceName",
          "Employee",
          "Employee",
          "Employee",
          false,
          false
        ),
        new DiffFieldValuePair(
          "analyticObjectReferencePath",
          "[]",
          "[]",
          "[]",
          false,
          false
        )
      ]),
    new DiffListItem(4,
      "Hair Color : No Access",
      "Hair Color : Aggregate",
      "Hair Color : No Access",
       "Hair Color", SelectedDiffOption.NotSelected,
            [
        new DiffFieldValuePair(
          "propertyId",
          "Hair_Color",
          "Hair_Color",
          "Hair_Color",
          false,
          false
        ),
        new DiffFieldValuePair(
          "accessLevel",
          "No Access",
          "Aggregate",
          "No Access",
          true,
          false
          ),
        new DiffFieldValuePair(
          "analyticObjectReferenceName",
          "Employee",
          "Employee",
          "Employee",
          false,
          false
        ),
        new DiffFieldValuePair(
          "analyticObjectReferencePath",
          "[]",
          "[]",
          "[]",
          false,
          false
        )
      ]),
    new DiffListItem(5,
      "Last Name  : Aggregate",
      "Last Name  : Aggregate",
      "Last Name : Sensitive",
       "Last Name", SelectedDiffOption.NotSelected,
            [
        new DiffFieldValuePair(
          "propertyId",
          "Last_Name",
          "Last_Name",
          "Last_Name",
          false,
          false
        ),
        new DiffFieldValuePair(
          "accessLevel",
          "Aggregate",
          "Aggregate",
          "Sensitive",
          false,
          true
          ),
        new DiffFieldValuePair(
          "analyticObjectReferenceName",
          "Employee",
          "Employee",
          "Employee",
          false,
          false
        ),
        new DiffFieldValuePair(
          "analyticObjectReferencePath",
          "[]",
          "[]",
          "[]",
          false,
          false
        )
      ]),
    new DiffListItem(6,
      "Height : Sensitive",
      "Height : Aggregate",
      "Height : Sensitive",
           "Height", SelectedDiffOption.NotSelected,
            [
        new DiffFieldValuePair(
          "propertyId",
          "Height",
          "Height",
          "Height",
          false,
          false
        ),
        new DiffFieldValuePair(
          "accessLevel",
          "Sensitive",
          "Aggregate",
          "Sensitive",
          true,
          false
          ),
        new DiffFieldValuePair(
          "analyticObjectReferenceName",
          "Employee",
          "Employee",
          "Employee",
          false,
          false
        ),
        new DiffFieldValuePair(
          "analyticObjectReferencePath",
          "[]",
          "[]",
          "[]",
          false,
          false
        )
      ]),
    new DiffListItem(7,
      "Salary : No Access",
      "Salary : No Access",
      "Salary : Aggregate",
        "Salary", SelectedDiffOption.NotSelected,
            [
        new DiffFieldValuePair(
          "propertyId",
          "Salary",
          "Salary",
          "Salary",
          false,
          false
        ),
        new DiffFieldValuePair(
          "accessLevel",
          "No Access",
          "No Access",
          "Aggregate",
          false,
          true
          ),
        new DiffFieldValuePair(
          "analyticObjectReferenceName",
          "Employee",
          "Employee",
          "Employee",
          false,
          false
        ),
        new DiffFieldValuePair(
          "analyticObjectReferencePath",
          "[]",
          "[]",
          "[]",
          false,
          false
        )
      ]),
    new DiffListItem(8, 
      "Employee ID  : Sensitive",
      "Employee ID  : Aggregate",
      "Employee ID : Sensitive",
       "Employee ID", SelectedDiffOption.NotSelected,
            [
        new DiffFieldValuePair(
          "propertyId",
          "Employee_ID",
          "Employee_ID",
          "Employee_ID",
          false,
          false
        ),
        new DiffFieldValuePair(
          "accessLevel",
          "Sensitive",
          "Aggregate",
          "Sensitive",
          true,
          false
          ),
        new DiffFieldValuePair(
          "analyticObjectReferenceName",
          "Employee",
          "Employee",
          "Employee",
          false,
          false
        ),
        new DiffFieldValuePair(
          "analyticObjectReferencePath",
          "[]",
          "[]",
          "[]",
          false,
          false
        )
      ]),
    new DiffListItem(9, 
      "Gender: No Access",
      "Gender: Aggregate",
      "Gender : Sensitive",
       "Gender", SelectedDiffOption.NotSelected,
            [
        new DiffFieldValuePair(
          "propertyId",
          "Gender",
          "Gender",
          "Gender",
          false,
          false
        ),
        new DiffFieldValuePair(
          "accessLevel",
          "No Access",
          "Aggregate",
          "Sensitive",
          true,
          true
          ),
        new DiffFieldValuePair(
          "analyticObjectReferenceName",
          "Employee",
          "Employee",
          "Employee",
          false,
          false
        ),
        new DiffFieldValuePair(
          "analyticObjectReferencePath",
          "[]",
          "[]",
          "[]",
          false,
          false
        )
      ]),
    new DiffListItem(11, 
      "Marital Status : Aggregate",
      "Marital Status : Aggregate",
      "Marital Status : Sensitive",
       "Marital Status", SelectedDiffOption.NotSelected,
            [
        new DiffFieldValuePair(
          "propertyId",
          "Marital_Status",
          "Marital_Status",
          "Marital_Status",
          false,
          false
        ),
        new DiffFieldValuePair(
          "accessLevel",
          "Aggregate",
          "Aggregate",
          "Sensitive",
          false,
          true
          ),
        new DiffFieldValuePair(
          "analyticObjectReferenceName",
          "Employee",
          "Employee",
          "Employee",
          false,
          false
        ),
        new DiffFieldValuePair(
          "analyticObjectReferencePath",
          "[]",
          "[]",
          "[]",
          false,
          false
        )
      ]),
  ];
  }
}