import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { MultiOp } from '../src/MultiOp.js';
import '../src/multi-op.js';

describe('MultiOp', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<MultiOp>(html`<multi-op></multi-op>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<MultiOp>(html`<multi-op></multi-op>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<MultiOp>(
      html`<multi-op title="attribute title"></multi-op>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<MultiOp>(html`<multi-op></multi-op>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
