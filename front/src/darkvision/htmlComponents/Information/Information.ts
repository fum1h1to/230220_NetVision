import './Information.scss'

export class Information {

  constructor() {

  }

  public insertTo(ele: HTMLElement) {
    ele.insertAdjacentHTML('beforeend', this.getHTML());
    this.setup();
  }

  private setup() {
    
  }

  private getHTML(): string {

    return (
      `
      <div class="netVision-information dark">
      <div class="netVision-information__cont overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Information
          </caption>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" style="color: #ff0000">
                -----
              </th>
              <td class="px-6 py-4">
                From AbuseIP
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" style="color: #ffff00">
                -----
              </th>
              <td class="px-6 py-4">
                From Normal IP
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
      `
    )
  }
}