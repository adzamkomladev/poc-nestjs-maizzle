import { Injectable } from '@nestjs/common';

import * as fs from 'fs/promises';

import { resolve } from 'app-root-path';
import * as Maizzle from '@maizzle/framework';
import * as Mustache from 'mustache';

@Injectable()
export class AppService {
  async getHello() {
    return await this.customizeEmail({
      name: 'Komla Adzam',
      stack: 'NESTJS',
      database: 'MongoDB',
    });
  }

  async customizeEmail(variables: Record<string, any>) {
    const html = await this.renderEmail('transactional.html');

    const customized = Mustache.render(html, variables);

    return customized;
  }

  async renderEmail(template: string) {
    const templatePath = resolve(`/maizzle/templates/${template}`);
    const rawTemplate = (await fs.readFile(templatePath))?.toString();

    const { html } = await Maizzle.render(rawTemplate, {
      tailwind: {
        config: require(resolve('tailwind.config.js')),
      },
      maizzle: require(resolve('config.production.js')),
    });

    return html;
  }
}
