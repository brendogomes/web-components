import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'web-button',
  styleUrl: 'web-button.css',
  shadow: true,
})
export class WebButton {
  /**
   * Define the color of the button (e.g., 'indigo', 'blue', 'red')
   */
  @Prop() color: string = 'indigo';

  /**
   * Define the size of the button (e.g., 'small', 'medium', 'large')
   */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Define the button type (e.g., 'button', 'submit', 'reset')
   */
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  private getButtonClasses() {
    const colorClasses = {
      indigo: 'bg-indigo-500 hover:bg-indigo-700 text-white',
      blue: 'bg-blue-500 hover:bg-blue-700 text-white',
      red: 'bg-red-500 hover:bg-red-700 text-white',
    };

    const sizeClasses = {
      small: 'py-1 px-2 text-sm',
      medium: 'py-2 px-4 text-base',
      large: 'py-3 px-6 text-lg',
    };

    const colorClass = colorClasses[this.color] || colorClasses.indigo;
    const sizeClass = sizeClasses[this.size] || sizeClasses.medium;

    return `${colorClass} ${sizeClass} font-bold rounded focus:outline-none focus:ring-2 focus:ring-${this.color}-500`;
  }

  render() {
    return (
      <Host>
        <button
          class={this.getButtonClasses()}
          type={this.type}
          aria-label="Custom button"
        >
          <slot>Default Text</slot>
        </button>
      </Host>
    );
  }
}
